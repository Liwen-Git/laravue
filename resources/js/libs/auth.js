import localforage from 'localforage'

const TOKEN = 'token:';

const PERMISSION = 'permissions:';

const USERNAME = 'username:';

export const setToken = (token, provider) => {
  return localforage.setItem(getTokenKey(provider), token)
}

export const getToken = (provider) => {
  return localforage.getItem(getTokenKey(provider))
}

export const removeToken = (provider) => {
  return localforage.removeItem(getTokenKey(provider))
}

export const getTokenKey = (provider) => {
  return TOKEN + provider
}

export const setPermissions = (permissions, provider) => {
  return localforage.setItem(getPermissionKey(provider), permissions)
}

export const getPermissions = (provider) => {
  return localforage.getItem(getPermissionKey(provider))
}

export const getPermissionKey =  provider => {
  return PERMISSION + provider
}

export const setUsername = (username, provider) => {
  return localforage.setItem(getUsernameKey(provider), username)
}

export const getUsername = (provider) => {
  return localforage.getItem(getUsernameKey(provider))
}

export const getUsernameKey =  provider => {
  return USERNAME + provider
}