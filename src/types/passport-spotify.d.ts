import passport = require('passport');
import express = require('express');

export interface Profile extends passport.Profile {
  // id: string;
  // displayName: string;
  // gender?: string;
  // ageRange?: {
  //   min: number;
  //   max?: number;
  // };
  // profileUrl?: string;
  // username?: string;
  // birthday: string;

  // _raw: string;
  // _json: any;
}

export interface AuthenticateOptions extends passport.AuthenticateOptions {
  authType?: string;
}

export interface StrategyOption {
  clientID: string;
  clientSecret: string;
  callbackURL: string;

  scopeSeparator?: string;
  enableProof?: boolean;
  profileFields?: string[];
}

export interface StrategyOptionWithRequest extends StrategyOption {
  passReqToCallback: true;
}

export type VerifyFunction = (
  accessToken: string,
  refreshToken: string,
  expired_in: any,
  profile: Profile,
  done: (error: any, user?: any, info?: any) => void,
) => void;

export type VerifyFunctionWithRequest = (
  req: express.Request,
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: (error: any, user?: any, info?: any) => void,
) => void;

export class Strategy extends passport.Strategy {
  constructor(
    options: StrategyOptionWithRequest,
    verify: VerifyFunctionWithRequest,
  );
  constructor(options: StrategyOption, verify: VerifyFunction);

  name: string;
  authenticate(req: express.Request, options?: object): void;
}
