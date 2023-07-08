import {connect} from "../database.js"
import {encryptString} from "../encriptar.js"

const crypto = require('crypto');

export const getUsers = async (req, res) =>{
  const db = await connect();
  const [rows] =  await db.query("SELECT * FROM users");
  res.json(rows);
}

export const Login = async (req, res) =>{
  const db = await connect();
  const key = "diana";
  const pass_encry = encryptString(req.body.password, key);
  const [rows] =  await db.query("SELECT * FROM users WHERE usuario = ? and password = ?", [
    req.body.user,
    pass_encry,
  ]);
  console.log(pass_encry);
  console.log(rows);
  if(rows.length == 0){
    res.json({
      "success":false,
      "user": rows,
    })
  }
  else {
    res.json({
      "success": true,
      "user": rows[0],
    });
  }
}

export const createUser = async (req, res) => {
  const db = await connect();
  const [rows] =  await db.query("SELECT * FROM users WHERE usuario = ?", [
    req.body.usuario
  ]);
  if(rows.length > 0){
    res.json({
      "success": false,
      "message": "Usuario"
    })
  }

  const key = "diana";
  const pass_encry = encryptString(req.body.password, key);
  const str = "('" + req.body.usuario +"','"+ pass_encry +"','"+  req.body.correo +"','"+ req.body.nombre + "')";
  console.log(str);
  const [respuesta] = await db.query("INSERT INTO users (usuario, password, correo, nombre) values(?,?,?,?)", [
    req.body.usuario,
    pass_encry,
    req.body.correo,
    req.body.nombre
  ]);
  const [usuario] =  await db.query("SELECT * FROM users WHERE usuario = ?", [
    req.body.usuario
  ]);
  console.log("res: ", respuesta);
  res.json({
    "success": true,
    "user": usuario[0]
  })
}
