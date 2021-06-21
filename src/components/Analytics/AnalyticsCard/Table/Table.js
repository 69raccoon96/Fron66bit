import React from "react";
import {Table} from "react-bootstrap";

const TableR = (props) => {
    const elems = props.data.map((t, index) =>
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{t.name}</td>
            <td>{t.projectName}</td>
            <td>{t.timePlaned} ч</td>
            <td>{t.timeSpent} ч</td>
            <td>{Math.abs(t.timeSpent - t.timePlaned)} ч</td>
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