# Applying OOD in the To-Do List

Encapsulation:

TaskEditor - encapsulates (bundling of data) the state and behavior related to adding a new task


Inheritance and Polymorphism:

Although not explicitly used in this code
Polymorphism can be applied when components share the same interface but have different implementations.

Abstraction:

TaskEditor abstracts the task creation logic.
TaskList abstracts the task listing logic.
TaskFilter abstracts the task filtering logic

## SOLID

S

Each component has a single responsibility. For example, TaskEditor is responsible for adding tasks, 
TaskFilter is responsible for filtering tasks, 
TaskList is responsible for displaying the list of tasks.

Open/Closed Principle

The PriorityOptions object is used to manage task priorities, and new priorities can be added without modifying the existing options

Liskov Substitution Principle (LSP) - 

Interface Segregation Principle (ISP):

Components should not be forced to depend on interfaces they do not use
TaskList not depends on priority component

Dependency Inversion Principle - High-level components should not depend on low-level components; both should depend on abstractions ??????

