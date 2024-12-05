---
tags: ["工具"] # 标签
author: "仟尘" # 作者
title: "SQL 开发相关" # 标题
date: "2024-11-28" # 日期

description: "SQL 开发相关的记录笔记，主要针对 Cloudflare D1 所用的类 SQLite 语法" # 页面描述、面向搜索引擎用户
head:
  - - meta
    - name: Keywords
      content: "tips,SQL,editor" # 网站关键词（SEO）
---
> 菜鸟文档：[链接](https://www.runoob.com/sql/sql-tutorial.html)

### 创建表
``` SQL
CREATE TABLE 表名 (
    列名1 data_type PRIMARY KEY,
    列名2 data_type constraint,
    列名3 data_type DEFAULT 默认值,
    ...
);
```
- data_type: 列的数据类型,TEXT(文本) INT(整数) 菜鸟文档：[链接](https://www.runoob.com/sqlite/sqlite-data-types.html)
- constraint: 列的约束设定，UNIQUE(唯一) 菜鸟文档：[链接](https://www.runoob.com/sql/sql-constraints.html)
- PRIMARY KEY：主键
- DEFAULT：默认值

### 删除表
``` SQL
DROP TABLE 表名;
```

### 添加列
``` SQL
ALTER TABLE 表名 ADD 列名 data_type;
```

### 删除列
``` SQL
ALTER TABLE 表名 DROP COLUMN 列名;
```

### 查询数据
``` SQL
SELECT 选中的列1, 选中的列2 FROM 表名 WHERE 条件 > 10 ORDER BY 选中的列1 ASC;
```
- SELECT: 要查询的列
- FROM: 要查询的表
- WHERE: 查询条件
- ORDER BY: 排序方式，ASC(升序)，DESC(降序)

### 插入数据
``` SQL
INSERT INTO 表名 (列1, 列2, ...)VALUES (值1, 值2, ...);
```

### 更新数据
``` SQL
UPDATE 表名 SET 列1 = 值1, 列2 = 值2, ... WHERE 条件;
```

### 删除数据
``` SQL
DELETE FROM 表名 WHERE 条件;
```

### 创建索引
``` SQL
CREATE INDEX 索引的名称 ON 表名 (要索引的列);
```

### 删除索引
``` SQL
DROP INDEX 索引的名称 ON 表名;
```
