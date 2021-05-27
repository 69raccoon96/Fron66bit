import React from "react";
import {Table} from "react-bootstrap";

const TableR = (props) => {
    const elems = props.data.map((t, index) =>
        <tr key={index}>
            <td>{index}</td>
            <td>{t.name}</td>
            <td>Жду пока Ваня вставит название проекта</td>
            <td>{t.timePlaned} ч</td>
            <td>{t.timeSpent} ч</td>
            <td>{t.timeSpent - t.timePlaned} ч</td>
        </tr>);

    return <Table>
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">{props.type}</th>
            <th scope="col">Проект</th>
            <th scope="col">План</th>
            <th scope="col">Факт</th>
            <th scope="col">Превышение</th>
        </tr>
        {elems}
        </thead>
    </Table>
};

export default TableR;