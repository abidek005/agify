import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { getAgify } from '../../src/apiClient';

Given('the base url is {string}', function (this: any, url: string) {
  this.baseUrl = url;
});

Given('I have the name {string}', function (this: any, name: string) {
  this.name = name;
});

Given('I have the names {string} and {string}', function (this: any, a: string, b: string) {
  this.name = [a, b];
});

When('I request age prediction for that name', async function (this: any) {
  const res = await getAgify(this.baseUrl, { name: this.name });
  this.lastResponse = res.data;
  this.lastStatus = res.status;
});


When('I request age prediction without a name', async function (this: any) {
  const res = await getAgify(this.baseUrl, {});
  this.lastResponse = res.data;
  this.lastStatus = res.status;
});

When('I request age prediction for those names as a batch', async function (this: any) {
  const res = await getAgify(this.baseUrl, { 'name[]': this.name });
  this.lastResponse = res.data;
  this.lastStatus = res.status;
});

Then('the response status should be {int}', function (this: any, status: number) {
  expect(this.lastStatus).to.equal(status);
});

Then('the response status should be an error', function (this: any) {
  expect(this.lastStatus).to.be.oneOf([400, 422, 200]);
});

Then('the response should contain fields {string}', function (this: any, fields: string) {
  const list = fields.split(',').map(s => s.trim());
  list.forEach(f => expect(this.lastResponse).to.have.property(f));
});

Then('the response should be an array of length {int}', function (this: any, n: number) {
  expect(Array.isArray(this.lastResponse)).to.be.true;
  expect(this.lastResponse.length).to.equal(n);
});
