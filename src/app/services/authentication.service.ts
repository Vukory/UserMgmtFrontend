import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import * as internal from 'stream';

export enum Gender {
  M = 1,
  F = 2,
  Na = 3
}

export enum SystemRole {
  Admin = 1,
  User = 2
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  username: string;
  systemRole: SystemRole;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
}
