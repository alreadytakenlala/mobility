# Condition
***

### Class Condition
&emsp;lib.mobility.Condition
***
Class Condition 是动效的条件对象，根据Condition的属性渲染不同的动态效果
##### 从以下版本开始
1.0.0
##### 另请参见
[Class](http://es6.ruanyifeng.com/#docs/class-extends)

#### 构造方法摘要
| 构造方法 | 参数 |
| --- | :---: |
|  Condition() |
&emsp;说明：`构造条件对象`
    
#### 方法摘要
| 方法 | 参数 |
| --- | :---: |
| setMark(mark) | mark：元素id或者class |
&emsp;说明：`设置标识`\
&emsp;结果：`this：条件对象`

| 方法 | 参数(默认值) |
| --- | :---: |
| setOpen(open) | open：是否开启动效(true) |
&emsp;说明：`设置是否开启动效`\
&emsp;结果：`this：条件对象`

| 方法 | 参数 |
| --- | :---: |
| setStartMonitor(startMonitor) | startMonitor：监视条件 |
&emsp;说明：`设置是否开启动效`\
&emsp;结果：`this：条件对象`

| 方法 | 参数(默认值) |
| --- | :---: |
| setDuration(duration) | duration：时长(1000) |
&emsp;说明：`设置时长`\
&emsp;结果：`this：条件对象`

| 方法 | 参数(默认值) |
| --- | :---: |
| setDelay(delay) | delay：延时(0) |
&emsp;说明：`设置延时`\
&emsp;结果：`this：条件对象`

| 方法 | 参数(默认值) |
| --- | :---: |
| setDirection(direction) | direction：方向(bottom) |
&emsp;说明：`设置方向, 比如沉积效果，direction='top'/上浮,direction='bottom'/下沉`\
&emsp;结果：`this：条件对象`

| 方法 | 参数(默认值) |
| --- | :---: |
| setCount(count) | count：次数(1) |
&emsp;说明：`设置执行次数`\
&emsp;结果：`this：条件对象`

| 方法 | 参数(默认值) |
| --- | :---: |
| setEleLevel(eleLevel) | eleLevel：元素层次(0) |
&emsp;说明：`设置元素层次`\
&emsp;结果：`this：条件对象`

| 方法 | 参数 |
| --- | :---: |
| setWidth(...width) | width：宽度组 |
&emsp;说明：`设置宽度组`\
&emsp;结果：`this：条件对象`

| 方法 | 参数 |
| --- | :---: |
| setHeight(...height) | height：高度组 |
&emsp;说明：`设置高度组`\
&emsp;结果：`this：条件对象`

| 方法 | 参数 |
| --- | :---: |
| setFilter(filter) | filter：过滤值 |
&emsp;说明：`设置元素过滤`\
&emsp;结果：`this：条件对象`

| 方法 | 参数(默认值) |
| --- | :---: |
| setInterval(interval) | interval：时间间隔(0) |
&emsp;说明：`设置时间间隔`\
&emsp;结果：`this：条件对象`

| 方法 | 参数 |
| --- | :---: |
| setOtherFileter(otherFileter) | otherFileter：过滤值 |
&emsp;说明：`设置其他元素的过滤效果`\
&emsp;结果：`this：条件对象`

| 方法 | 参数 |
| --- | :---: |
| setOverflowHidden(overflowHidden) | overflowHidden：溢出处理方式 |
&emsp;说明：`设置是否溢出隐藏`\
&emsp;结果：`this：条件对象`

| 方法 | 参数 |
| --- | :---: |
| setSpacing(spacing) | spacing：间距 |
&emsp;说明：`设置间距`\
&emsp;结果：`this：条件对象`

| 方法 | 参数(默认值) |
| --- | :---: |
| setOutset(outset) | outset：起点数值(0) |
&emsp;说明：`设置起点值`\
&emsp;结果：`this：条件对象`

| 方法 | 参数 |
| --- | :---: |
| equals(obj) | obj：对比对象 |
&emsp;说明：`判断对等`\

| 方法 | 参数 |
| --- | :---: |
| change(...param) | param：动效参数 |
&emsp;说明：`动效变化时调用方法`\
&emsp;结果：`this：条件对象`