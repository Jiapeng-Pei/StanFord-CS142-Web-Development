/*
1. 先处理第一行的column header，通过正则表达式的方式找到并替换一些property
2. 接着再遍历一遍column header，寻找column name并且记下是第几列
3. 如果有这一列，那么就把这一列的所有数据替换成dict中的对应元素；如果没有，就直接返回
*/

class TableTemplate {
    static fillIn(id, dict, columnName) { //columnName is a string
        let table = document.getElementById(id);
        table.style = `visibility: visible`;
        let firstRow = table.rows[0];
        let headerHtml = firstRow.innerHTML;
        let template = new Cs142TemplateProcessor(headerHtml);
        firstRow.innerHTML = template.fillIn(dict);

        let headers = firstRow.cells;
        let colIndex = -1;
        for (let i = 0; i < headers.length; i++) {
            if (headers[i].innerHTML == columnName) {
                colIndex = i;
            }
        }
        
        for (let i = 1; i < table.rows.length; i++) {
            let cells = table.rows[i].cells;
            for (let j = 0; j < cells.length; j++) {
                if (colIndex === j || columnName === undefined) {
                    template = new Cs142TemplateProcessor(cells[j].innerHTML);
                    cells[j].innerHTML = template.fillIn(dict)
                }
            }
        }
    }
}