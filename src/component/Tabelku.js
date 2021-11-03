import React, { Component, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { Route, NavLink } from "react-dom";
import { Link, Switch } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import Tambah from "./Tambah";

export default class Tabelku extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listmhs: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost/webCI/api/cobaapi/get`)
      .then((res) => {
        const listmhs = res.data;
        this.setState({ listmhs });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { listmhs } = this.state;
    return (
      <div>
        <div>
          <Button>Tambah +</Button>
        </div>
        <Table striped bordered hover md={3} mt="3">
          <thead className="dark">
            <tr>
              <th>NPM</th>
              <th>Nama Mahasiswa</th>
              <th>Jursan</th>
              <th>Alamat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {listmhs &&
              listmhs.map((data) => (
                <tr>
                  <td>{data.npm}</td>
                  <td>{data.nama}</td>
                  <td>{data.jurusan}</td>
                  <td>{data.alamat}</td>
                  <td>
                    <Button variant="warning">Ubah</Button>|
                    <Button variant="danger">Hapus</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
