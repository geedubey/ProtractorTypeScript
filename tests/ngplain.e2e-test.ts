"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        protractor_1.browser.get('https://angularjs.org'); // Entering application url in browser
        protractor_1.element(protractor_1.by.model('todoList.todoText')).sendKeys('write first protractor test'); // Enter text under TODO
        protractor_1.element(protractor_1.by.css('[value="add"]')).click(); // Clicks on 'Add' button
        let todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos')); // Getting all Todo lists displayed
        expect(todoList.count()).toEqual(3); // Asserting the TODO's count as 3
        expect(todoList.get(2).getText()).toEqual('write first protractor test'); //Verifying newly entered TODO is added
    });
});
