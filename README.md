# Weblog
一个个人博客网站

## 推荐命名风格：

- 全局变量以$开头
- 常量都大写开头，比如CityList,变量驼峰，英文标注含义，比如userInfo
- css变量最好用BEM命名法，具体自己搜一下趴
- 每次提交代码时commit的风格：提交类型+具体修改的内容 提交类型如下

| 名称     | 英文提示说明                                                 |                         中文提示说明                         |
| -------- | ------------------------------------------------------------ | :----------------------------------------------------------: |
| feat     | Introduces a new feature or enhances an existing one         |                  添加新的功能或改进现有功能                  |
| fix      | Fixes a bug or resolves a defect in the codebase             |                     修复一个错误或者缺陷                     |
| docs     | Changes only documentation content without altering code logic or functionality |            只修改了文档内容，不影响代码逻辑或功能            |
| style    | Changes that do not affect the program's behavior, such as formatting, white-space changes, or indentation |        代码格式、空白字符、缩进等不改变程序行为的变动        |
| refactor | Code restructuring without adding features or fixing bugs, but possibly improving internal structure |     代码重构，不新增功能也不修复错误，但可能改进内部结构     |
| perf     | Improves performance, e.g., optimizing algorithms, reducing memory usage, etc. |         提升性能的改动，比如优化算法、减少内存占用等         |
| test     | Adds missing tests or modifies existing tests for better coverage or other quality metrics | 添加缺失的测试用例，或者修改现有测试以提高覆盖率或其他质量指标 |
| build    | Changes related to the build system or external dependencies (like npm packages, compilers, etc.) | 与项目构建系统或外部依赖（如 npm 软件包、编译器等）相关的更改 |
| ci       | Changes to CI configuration files and scripts                |                  对 CI 配置文件和脚本的更改                  |
| chore    | Maintenance tasks that don't modify source code or tests     |               不修改源码或测试的其他维护性任务               |
| revert   | Reverts a previous commit                                    |                        撤销以前的提交                        |

**关于注释：核心方法或代码较长的方法必须写注释！！！代码较短的方法如果方法名表达清晰就可以不写**
