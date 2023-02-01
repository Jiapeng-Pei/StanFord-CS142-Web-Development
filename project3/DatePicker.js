/*
第一眼看上去好像没有什么思路。怎么办？
1. 对于这个类来说，他有两个输入。第一个是对应的id，另外一个是call back function.当选中一个日期时
需要调用callback function
2. 第二还有一个render方法。这个render方法选定一个月份，需要我们render一个前端的表格，用于展示这个
月份的所有日期。

思路：
对于render来说，首先我要知道这个月一共有几天，从星期几开始。
==> 已解决，通过date的方法获取这个月的第一天与最后一天，同时也可以通过调用data的API获取当前日期是
星期几。把current date更新到星期一（是可以实现的，想想怎么写），计算这个月一共有几个星期，针对每一
个星期创建一个html table的row。这样的话就可以创建一个日期表了。

两个思路：
1. 给里面的每个元素都注册一个event handler。比较麻烦但也是可行的。这个是对的。

大概如何实现这个日历我已经知道了，问题是当切换月份时，整个页面该如何切换呢？换一种说法，就是我的整
个class要分为几个function，互相之间要怎么调用呢？
其实很简单。切换月份就相当于再选了一个日期，直接随便选一个下个月的日期再调用一次render就好了。

7 1 2  3  4 5 6
    -2 -1 0 1
*/

"use strict";

class DatePicker {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
    }

    render(input) {
        let date = new Date(input.getTime());

        let target = document.getElementById(this.id);
        target.innerHTML = 
        `
        <span id="prev-${this.id}" class="button"><</span>
        <span id="header-${this.id}">  </span>
        <span id="next-${this.id}" class="button">></span>
        <table id="cal-${this.id}">
            <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
            </tr>
        </table>
        `;

        let prev = document.getElementById(`prev-${this.id}`);
        let header = document.getElementById(`header-${this.id}`);
        let next = document.getElementById(`next-${this.id}`);
        let cal = document.getElementById(`cal-${this.id}`);

        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        let endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let curMonth = firstDay.getMonth();

        // find the start and end of the current month
        let it = new Date(firstDay);
        it.setDate(it.getDate() - it.getDay());
        let diffDays = (endDay.getTime() - it.getTime()) / 86400000 + 1;
        let numWeeks = Math.ceil(diffDays / 7);

        // add a row of week to the calender
        let addWeek = () => {
            let ret = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                // set text and onclick handler
                let cell = document.createElement('td');
                cell.innerText = it.getDate();
                
                if (it.getMonth() == curMonth) {
                    cell.className = 'normal';
                    let obj = {
                        month: it.getMonth() + 1,
                        day: it.getDate(),
                        year: it.getFullYear()
                    };
                    cell.onclick = () => {
                        this.callback(this.id, obj);
                    }
                }
                else {
                    cell.className = 'dim';
                }
                ret.appendChild(cell);

                // move to next day
                it.setDate(it.getDate() + 1);
            }

            return ret;
        }

        for (let i = 0; i < numWeeks; i++) {
            cal.appendChild(addWeek());
        }
        
        // set the header
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let str = months[date.getMonth()] + " " + date.getFullYear();
        header.innerHTML = str;

        // add change to prev/next month function.
        prev.onclick = () => {
            this.render(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        }
        next.onclick = () => {
            this.render(new Date(date.getFullYear(), date.getMonth() + 1, 1));
        }
    }
}


