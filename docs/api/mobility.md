# Mobility
***

### Class Mobility
&emsp;lib.mobility.Mobility
***
Class Mobility 是动效结构的根，每个动效都有Mobility作为超类。所有对象都实现了这个类的方法
##### 从以下版本开始
1.0.0
##### 另请参见
[Class](http://es6.ruanyifeng.com/#docs/class-extends)

#### 构造方法摘要
| 构造方法 | 参数 | 参数 |
| --- | :---: | :----: |
|  Mobility(mark, condition) | mark：元素id或者class | condition：[条件对象](/api/condition) |
&emsp;说明：`构造动效对象`

#### 方法摘要
| 方法 | 参数 |
| --- | :---: |
| addListenerScroll() |
&emsp;说明：`添加到滚动监听器`

| 方法 | 参数 |
| --- | :---: |
| setCondition(condition) | condition：[条件对象](/api/condition) |
&emsp;说明：`设置条件`

| 方法 | 参数 |
| --- | :---: |
| addElement(element) | element：标签元素 |
&emsp;说明：`添加元素`

| 方法 | 参数 |
| --- | :---: |
| removeElement(index) | index：元素位置索引 |
&emsp;说明：`删除元素`

| 方法 | 参数 |
| --- | :---: |
| getScrollTop() |
&emsp;说明：`获取滚动条位置`

| 方法 | 参数 |
| --- | :---: |
| render() |
&emsp;说明：`开始渲染`
