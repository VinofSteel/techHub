import { Key } from "react";
import { To, RelativeRoutingType, Path } from "react-router-dom";
import { Assign, ObjectShape } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";
import { AnyObject } from "yup/lib/types";
import * as yup from "yup"

export interface iUserProps {
    children: React.ReactNode;
}

export interface iTechProps {
    children: React.ReactNode;
}

export interface iNavigateFunction {
  (
    to: To,
    options?: {
      replace?: boolean;
      state?: any;
      relative?: RelativeRoutingType;
    }
  ): void;
  (delta: number): void;
}

export interface iLocation extends Path {
    state: unknown;
    key: Key;
  }

export interface iLoginFunction {
    email: string;
    password: string;
}

export interface iRegisterFunction {
    email: string;
    password?: string;
    confirm_password?: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
}

export interface iTechPut {
    status: string
}

export interface iTechSubmitFunction extends iTechPut {
    title: string
}

export interface iUserContext {
    id: string | null;
    token: string | null;
    navigate: iNavigateFunction;
    user: iUserEmpty;
    setUser: React.Dispatch<React.SetStateAction<iUser | iUserEmpty>>
    loginFormSchema: yup.ObjectSchema<Assign<ObjectShape, {
        email: RequiredStringSchema<string | undefined, AnyObject>;
        password: RequiredStringSchema<string | undefined, AnyObject>;
    }>>;
    loginSubmitFunction: (data: iLoginFunction) => Promise<void>;
    registerFormSchema: yup.ObjectSchema<Assign<ObjectShape, {
        name: RequiredStringSchema<string | undefined, AnyObject>;
        email: RequiredStringSchema<string | undefined, AnyObject>;
        password?: RequiredStringSchema<string | undefined, AnyObject>;
        confirm_password?: RequiredStringSchema<string | undefined, AnyObject>;
        course_module: RequiredStringSchema<string | undefined, AnyObject>;
        contact: RequiredStringSchema<string | undefined, AnyObject>;
        bio: RequiredStringSchema<string | undefined, AnyObject>;
    }>>;
    registerSubmitFunction: (data: iRegisterFunction) => Promise<void>
    identification: string;
    setIdentification: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    loadingAlt: boolean;
    setLoadingAlt: React.Dispatch<React.SetStateAction<boolean>>
}

export interface iTechContext {
    modalAdd: boolean;
    toggleModalAdd: () => void;
    techFormSchema: yup.ObjectSchema<Assign<ObjectShape, {
        title: RequiredStringSchema<string | undefined, AnyObject>;
        status: RequiredStringSchema<string | undefined, AnyObject>;
    }>>;
    techSubmitFunction: (data: iTechSubmitFunction) => Promise<void>;
    techDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>
    modalPatch: boolean;
    toggleModalPatch: () => void;
    techFormPatchSchema: yup.ObjectSchema<Assign<ObjectShape, {
        status: RequiredStringSchema<string | undefined, AnyObject>;
    }>>;
    techPut: (data: iTechPut) => Promise<void>;
}

export interface iTech {
    id: string;
    title: string;
    status?: string;
    created_at: string;
    updated_at: string;
}

export interface iWork extends iTech {
    deploy_url: string;
    description: string;
}

export interface iUser extends iRegisterFunction {
    id: string;
    created_at: string;
    updated_at: string;
    avatar_url: string;
    techs: iTech[];
    works: iWork[];
}

export interface iUserEmpty {
    id?: string;
    created_at?: string;
    updated_at?: string;
    avatar_url?: string;
    techs?: iTech[];
    works?: iWork[];
    email?: string;
    password?: string;
    confirm_password?: string;
    name?: string;
    bio?: string;
    contact?: string;
    course_module?: string;
}

export interface iLoginResponse {
    user: iUser;
    token: string;
}