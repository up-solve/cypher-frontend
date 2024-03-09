import { Dropdown } from '@interfaces/DropDown';
import { CLIENT, CYPHER } from '../app';
import { CLIENT_DASHBOARD, CYPHER_DASHBOARD } from '../routes.ui';

/* TODO: Change href attributes */

export const navbarSignupButton: Dropdown[] = [
  {
    text: CYPHER,
    link: CYPHER_DASHBOARD,
  },
  {
    text: CLIENT,
    link: CLIENT_DASHBOARD,
  },
];

export const navbarLoginButton: Dropdown[] = [
  {
    text: CYPHER,
    link: CYPHER_DASHBOARD,
  },
  {
    text: CLIENT,
    link: CLIENT_DASHBOARD,
  },
];
