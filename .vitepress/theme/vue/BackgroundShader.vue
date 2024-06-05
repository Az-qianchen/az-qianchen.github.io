<template>
  <div id="webgl-container">
    <canvas ref="webglCanvas"></canvas>
  </div>
</template>

<script setup>
import { useData } from "vitepress";
import { onMounted, ref, watch } from "vue";

// 创建对 canvas 元素的引用
const webglCanvas = ref(null);

onMounted(() => {
  const canvas = webglCanvas.value;
  const gl = canvas.getContext("webgl");

  // 设置画布大小为全屏
  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // 顶点着色器代码
  const vertexShaderSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  // 片元着色器代码
  const fragmentShaderSource = `
    precision highp float;
    uniform float theme;
    uniform vec3 w_colour1;
    uniform vec3 w_colour2;
    uniform vec3 w_colour3;
    uniform vec3 w_colour4;
    uniform vec3 b_colour1;
    uniform vec3 b_colour2;
    uniform vec3 b_colour3;
    uniform vec3 b_colour4;
    uniform int contrast;
    uniform float gradual;
    uniform float width1;
    uniform float width2;
    uniform float scale1;
    uniform float scale2;
    uniform vec2 offset;
    uniform float intensity;
    uniform float spin_speed;
    uniform float spin_amount;
    uniform float time;
    uniform float canvas_width;
    uniform float canvas_height;
    void main() {
      vec3 colour1 = mix(w_colour1, b_colour1, theme);
      vec3 colour2 = mix(w_colour2, b_colour2, theme);
      vec3 colour3 = mix(w_colour3, b_colour3, theme);
      vec3 colour4 = mix(w_colour4, b_colour4, theme);
      float speed = time * spin_speed;
      vec2 uv = gl_FragCoord.xy / canvas_height;
      float center = canvas_width / canvas_height;
      uv.y -= 0.5;
      uv.x -= 0.5 * center;
      uv *= 2.0;
      uv += offset;
      float uv_len = length(uv);
      float angle = atan(uv.y, uv.x);
      angle -= spin_amount * uv_len;
      angle += speed;
      uv = vec2(uv_len * cos(angle), uv_len * sin(angle)) * scale2;
      uv *= scale1;
      vec2 uv2 = vec2(uv.x + uv.y);
      for (int i = 0; i < 5; i++) {
          uv2 += sin(uv);
          uv += vec2(cos(intensity * uv2.y + speed), sin(intensity * uv2.x - speed));
          uv -= cos(uv.x + uv.y) - sin(uv.x - uv.y);
      }
      float paint_res = smoothstep(0.0, gradual, length(uv) / scale1);
      float c3p = 1.0 - min(width2, abs(paint_res - 0.5)) * (1.0 / width2);
      float c_out = max(0.0, (paint_res - (1.0 - width1))) * (1.0 / width1);
      float c_in = max(0.0, -(paint_res - width1)) * (1.0 / width1);
      float c4p = c_out + c_in;
      vec3 ret_col = mix(colour1, colour2, paint_res);
      ret_col = mix(ret_col, colour3, c3p);
      ret_col = mix(ret_col, colour4, c4p);
      gl_FragColor = vec4(ret_col * mix(uv_len / 2.0, 1.0, theme), 1.0);
    }
  `;

  // 创建和编译着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.compileShader(vertexShader);

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  gl.compileShader(fragmentShader);

  // 创建程序对象并链接着色器
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  // 设置顶点数据
  const vertexData = new Float32Array([
    -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0,
  ]);

  // 创建缓冲区并绑定顶点数据
  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

  const positionAttribLocation = gl.getAttribLocation(program, "position");
  gl.vertexAttribPointer(
    positionAttribLocation,
    2,
    gl.FLOAT,
    false,
    2 * Float32Array.BYTES_PER_ELEMENT,
    0
  );
  gl.enableVertexAttribArray(positionAttribLocation);

  const uniformLocations = {
    theme: gl.getUniformLocation(program, "theme"),
    w_colour1: gl.getUniformLocation(program, "w_colour1"),
    w_colour2: gl.getUniformLocation(program, "w_colour2"),
    w_colour3: gl.getUniformLocation(program, "w_colour3"),
    w_colour4: gl.getUniformLocation(program, "w_colour4"),
    b_colour1: gl.getUniformLocation(program, "b_colour1"),
    b_colour2: gl.getUniformLocation(program, "b_colour2"),
    b_colour3: gl.getUniformLocation(program, "b_colour3"),
    b_colour4: gl.getUniformLocation(program, "b_colour4"),
    contrast: gl.getUniformLocation(program, "contrast"),
    gradual: gl.getUniformLocation(program, "gradual"),
    width1: gl.getUniformLocation(program, "width1"),
    width2: gl.getUniformLocation(program, "width2"),
    scale1: gl.getUniformLocation(program, "scale1"),
    scale2: gl.getUniformLocation(program, "scale2"),
    offset: gl.getUniformLocation(program, "offset"),
    intensity: gl.getUniformLocation(program, "intensity"),
    spin_speed: gl.getUniformLocation(program, "spin_speed"),
    spin_amount: gl.getUniformLocation(program, "spin_amount"),
    time: gl.getUniformLocation(program, "time"),
    canvas_width: gl.getUniformLocation(program, "canvas_width"),
    canvas_height: gl.getUniformLocation(program, "canvas_height"),
  };

  // 设置 uniform 变量的初始值
  gl.uniform1f(uniformLocations.theme, 0);
  gl.uniform3f(uniformLocations.w_colour1, 0.0, 0.427, 0.62);
  gl.uniform3f(uniformLocations.w_colour2, 0.0, 0.63, 0.43);
  gl.uniform3f(uniformLocations.w_colour3, 1.0, 1.0, 1.0);
  gl.uniform3f(uniformLocations.w_colour4, 0.0, 0.0, 0.0);
  gl.uniform3f(uniformLocations.b_colour1, 0.0, 0.42, 0.61);
  gl.uniform3f(uniformLocations.b_colour2, 0.0, 0.61, 0.57);
  gl.uniform3f(uniformLocations.b_colour3, 1.0, 1.0, 1.0);
  gl.uniform3f(uniformLocations.b_colour4, 1.0, 1.0, 1.0);
  gl.uniform1i(uniformLocations.contrast, 5);
  gl.uniform1f(uniformLocations.gradual, 2.0);
  gl.uniform1f(uniformLocations.width1, 0.2);
  gl.uniform1f(uniformLocations.width2, 0.1);
  gl.uniform1f(uniformLocations.scale1, 10.0);
  gl.uniform1f(uniformLocations.scale2, 1.0);
  gl.uniform2f(uniformLocations.offset, 0.0, 0.0);
  gl.uniform1f(uniformLocations.intensity, 0.2);
  gl.uniform1f(uniformLocations.spin_speed, 0.2);
  gl.uniform1f(uniformLocations.spin_amount, 1.5);
  gl.uniform1f(uniformLocations.time, 1.0);
  gl.uniform1f(uniformLocations.canvas_width, canvas.width);
  gl.uniform1f(uniformLocations.canvas_height, canvas.height);

  // 主题切换
  const { isDark } = useData();
  watch(isDark, (newTheme) => {
    themeValue = newTheme ? 0 : 1;
    console.log("Theme changed to:", themeValue);
  });
  let themeValue = isDark.value ? 0 : 1;
  let smoothedThemeValue = 0;

  function lerpi(a, b, t) {
    return a + (b - a) * t;
  }

  function render() {
    gl.uniform1f(uniformLocations.time, performance.now() / 10000.0);
    gl.uniform1f(uniformLocations.canvas_width, canvas.width);
    gl.uniform1f(uniformLocations.canvas_height, canvas.height);

    smoothedThemeValue = lerpi(smoothedThemeValue, themeValue, 0.1);
    gl.uniform1f(uniformLocations.theme, smoothedThemeValue);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    requestAnimationFrame(render);
  }
  render();
});
</script>

<style scoped>
#webgl-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -9999;
  background: rgba(129, 22, 22, 0.1); /* 半透明背景 */
  backdrop-filter: blur(100px); /* 毛玻璃效果 */
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
