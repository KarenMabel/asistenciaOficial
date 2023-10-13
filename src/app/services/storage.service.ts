import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Preferences } from '@capacitor/preferences';

const keyStorageUsuario = "usuarioData";
const keyStorageAsistencia = "asistenciaData";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public correoUsuario: string ="";

  constructor(private auth: AngularFireAuth) { }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave, value:valor});
  }

  async getUser(){
    const usuario = await this.getItem(keyStorageUsuario);

    if (usuario == null ) {
      return [];

    }

    const usuarios = JSON.parse(usuario);

    if (usuarios) {
      return usuarios;
    }else{
      return [];
    }

  }

  async keepUser(user:any[]){
    const usuarioStorage = await this.getUser();
    for (const i of usuarioStorage){
      if (i) {
        user.push(i);
      }
    }
    this.setItem(keyStorageUsuario, JSON.stringify(user));

  }

  async getAsistencia(){
    const asistencia = await this.getItem(keyStorageAsistencia);

    if (asistencia == null ) {
      return [];

    }

    const regisAsistencia = JSON.parse(asistencia);

    if (regisAsistencia) {
      return regisAsistencia;
    }else{
      return [];
    }

  }

  async keepAsistencia(Asistencias:any[]){
    const asistenciaStorage = await this.getAsistencia();
    for (const f of asistenciaStorage){
      if (f) {
        Asistencias.push(f);
      }
    }
    this.setItem(keyStorageUsuario, JSON.stringify(Asistencias));

  }





  
}
