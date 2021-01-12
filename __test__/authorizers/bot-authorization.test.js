const botAuthorization = require('../../src/authorizers/bot-authorization')
const permissionsConstants = require('../../src/permission-contstants')
const { ADMIN, OWNER, READ } = permissionsConstants

test('empty event should return false', () => {
  const event = {}
  const result = botAuthorization(event, 1, [ADMIN])
  expect(result).toBe(false)
})

test('check even.json for admin permission to bot 1', () => {
  const event = require('./event.json')
  const result = botAuthorization(event, 1, [ADMIN])
  expect(result).toBe(true)
})

test('check even.json for owner permission that is not there to bot 1', () => {
  const event = require('./event.json')
  const result = botAuthorization(event, 1, [OWNER])
  expect(result).toBe(false)
})

test('check even.json for owner and admin permission to bot 1', () => {
  const event = require('./event.json')
  const result = botAuthorization(event, 1, [ADMIN, OWNER])
  expect(result).toBe(false)
})

test('check even.json for admin permission to bot that is not there', () => {
  const event = require('./event.json')
  const result = botAuthorization(event, 2, [ADMIN])
  expect(result).toBe(false)
})
