
'use client';

import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    height: "4 CM",
    obstruction: "157 CM",
    roll: "212.68",
    tilt: "264.85",
    azimuth: "183.31",
  },
  {
    key: "2",
    height: "4 CM",
    obstruction: "157 CM",
    roll: "212.68",
    tilt: "264.85",
    azimuth: "183.31",
  },
  {
    key: "3",
    height: "4 CM",
    obstruction: "157 CM",
    roll: "212.68",
    tilt: "264.85",
    azimuth: "183.31",
  },
  {
    key: "4",
    height: "4 CM",
    obstruction: "157 CM",
    roll: "212.68",
    tilt: "264.85",
    azimuth: "183.31",
  },
  {
    key: "5",
    height: "4 CM",
    obstruction: "157 CM",
    roll: "212.68",
    tilt: "264.85",
    azimuth: "183.31",
  },
];

const columns = [
  {
    key: "height",
    label: "ANTENNA HEIGHT",
  },
  {
    key: "obstruction",
    label: "ANTENNA OBSTRUCTION",
  },
  {
    key: "roll",
    label: "ANTENNA ROLL",
  },
  {
    key: "tilt",
    label: "ANTENNA TILT",
  },
  {
    key: "azimuth",
    label: "ANTENNA AZIMUTH",
  },
];

export default function DataTable() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
