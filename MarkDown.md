# MarkDown
## 简介
Markdown 是一种用来写作的轻量级「标记语言」，它用简洁的语法代替排版，而不像一般我们用的字处理软件 Word 或 Pages 有大量的排版、字体设置。它使我们专心于码字，用「标记」语法，来代替常见的排版格式。可以利用 CloudApp 这种云服务工具直接上传至网页用来分享你的文章，全球最大的轻博客平台 Tumblr，也支持使用 Mou 这类 Markdown 工具进行编辑并直接上传。Github/gitlab
# 反引号
\*   星号
\_   底线
\{\}  花括号
\[\]  方括号
\(\)  括弧
\#   井字号
\\   加号
\-   减号
\.   英文句点
\!   惊叹号

# 链接
<http://example.com/>
`代码:<http://example.com/>`
# 图片
![Alt text](/path/to/img.jpg)
`代码：![Alt text](/path/to/img.jpg)`
# 强调
*single asterisks*
`代码：*single asterisks*`
**single underscores**
`代码：**single asterisks**`
# 区段元素
This is [an example](http://example.com/ "Title") inline link.
`代码：This is [an example](http://example.com/ "Title") inline link.`

This is [an example] [id] reference-style link.
[id]: http://example.com/  "Optional Title Here"
# 分割线
***
`代码：***`
_ _ _
`代码：_ _ _`
# 代码区块
<pre><code>
#include< stdio.h>
void main()
{
    return 0;
}</code>
</pre>
# 列表
* Red
* Green
* Blue
+ Yellow
+ Gold
- Student
- Teacher

1. d
2. d
4. d
# 区块引用
> this is a good ides
>> 此话出自New View

我的邮箱 
> 1075887609@qq.com
# 标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题

- 二阶标题  

# 表格
学号|姓名|分数
-|-|-
小明|男|75
小红|女|79
小陆|男|92

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

# 删除线
~~哎呦不好意思，写错了~~
# 流程图（不要求掌握）


```mermaid
graph TD
    client1-->|read / write
    client2-->|read only
    client3-->|read / write
    client4-->|read only
    SVN---|store the data|sharedrive
end
```

# GitHub and Gitlab
<pre><code>echo "# FE_Project" >> README.md  
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:JimmyYangsix/FE_Project.git
git push -u origin master</code></pre>
# 表情 
:smile:
:star2:
:sob:
:dash:
:poop:
:sunny:
:tennis:
:ok:




