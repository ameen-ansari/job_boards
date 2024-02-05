import { yupResolver } from "@hookform/resolvers/yup";
import { globalVariables } from "../helper/globalVariables";
import * as Yup from "yup";

const nameRegex = /^(?!\s)[A-Za-z][A-Za-z\s]*[\.]{0,1}[A-Za-z\s]*$/;
const emailRegex =
  /^([\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*)@((?:[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?\.)+[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?)$/;
const passwordRegexSpecial =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const firstSpace = /^(?!\s).*/;

const linkValidation =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

const websiteRegex =
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const signupResolver = yupResolver(
  Yup.object().shape({
    name: Yup.string()
      .required(globalVariables.roleRequired)
      .matches(firstSpace, globalVariables.roleRequired),
    email: Yup.string()
      .required(globalVariables.emailRequired)
      .matches(emailRegex, globalVariables.invalidEmail),
    password: Yup.string()
      .required(globalVariables.passwordRequired)
      .matches(passwordRegexSpecial, globalVariables.mustHaveAtLease),
    confirmPassword: Yup.string()
      .required(globalVariables.passwordRequired)
      .oneOf([Yup.ref("password"), null], globalVariables.passwordNotMatch),
  })
);

export const loginResolver = yupResolver(
  Yup.object().shape({
    email: Yup.string()
      .required(globalVariables.emailRequired)
      .matches(
        /^([\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*)@((?:[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?\.)+[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?)$/,
        globalVariables.invalidEmail
      ),
    password: Yup.string()
      .min(8, globalVariables.mustHaveAtLease)
      .max(20)
      .required(globalVariables.passwordRequired),
  })
);

export const resetResolver = yupResolver(
  Yup.object().shape({
    email: Yup.string()
      .required(globalVariables.emailRequired)
      .matches(
        /^([\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*)@((?:[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?\.)+[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?)$/,
        globalVariables.invalidEmail
      ),
  })
);

export const setNewResolver = yupResolver(
  Yup.object().shape({
    password: Yup.string()
      .required(globalVariables.passwordRequired)
      .matches(passwordRegexSpecial, globalVariables.mustHaveAtLease),
    confirmPassword: Yup.string()
      .required(globalVariables.passwordRequired)
      .oneOf([Yup.ref("password"), null], globalVariables.passwordNotMatch),
  })
);

export const profileResolver = yupResolver(
  Yup.object().shape({
    name: Yup.string()
      .required(globalVariables.nameRequired)
      .matches(nameRegex, globalVariables.nameRequired),
    headline: Yup.string()
      .required(globalVariables.headlineRequired)
      .matches(nameRegex, globalVariables.headlineRequired),
    location: Yup.string()
      .required(globalVariables.locationRequired)
      .matches(firstSpace, globalVariables.locationRequired),
    skills: Yup.string()
      .required(globalVariables.skillsRequired)
      .matches(nameRegex, globalVariables.skillsRequired),
    bio: Yup.string()
      .required(globalVariables.bioRequired)
      .matches(nameRegex, globalVariables.bioRequired),
  })
);

export const contactResolver = yupResolver(
  Yup.object().shape(
    {
      email: Yup.string()
        .required(globalVariables.emailRequired)
        .matches(
          /^([\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*)@((?:[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?\.)+[\dA-Za-z](?:[\dA-Za-z-]*[\dA-Za-z])?)$/,
          globalVariables.invalidEmail
        ),
      linkedin: Yup.string()
        .required(globalVariables.linkedinRequired)
        .matches(linkValidation, globalVariables.inputNotMeet),
      gitHub: Yup.string()
        .required(globalVariables.gitHubRequired)
        .matches(linkValidation, globalVariables.inputNotMeet),
      website: Yup.string()
        .required(globalVariables.websiteRequired)
        .matches(linkValidation, globalVariables.inputNotMeet),
    }
    // [["website", "website"]]
  )
);

export const JobResolver = yupResolver(
  Yup.object().shape({
    role: Yup.string()
      .required(globalVariables.roleRequired)
      .matches(nameRegex, globalVariables.roleRequired),
    jobType: Yup.string()
      .required(globalVariables.jobTypeRequired)
      .matches(nameRegex, globalVariables.jobTypeRequired),
    location: Yup.string()
      .required(globalVariables.locationRequired)
      .matches(firstSpace, globalVariables.locationRequired),
    experience: Yup.string()
      .required(globalVariables.experienceRequired)
      .matches(nameRegex, globalVariables.experienceRequired),
    pay: Yup.number()
      .typeError(globalVariables.validPay)
      .positive(globalVariables.validPay)
      .required(globalVariables.payRequired),

    // .matches(nameRegex, globalVariables.experienceRequired),
  })
);
