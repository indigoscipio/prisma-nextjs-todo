import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

type Props = {};

const Dashboard = ({ todos, session }) => {
  if (!todos) {
    return <p>Loading Todos...</p>;
  }

  console.log(session);

  return (
    <main className="container mx-auto px-4 py-24 text-center flex flex-col gap-16">
      <h1 className="text-xl font-bold">Simple Nextjs App Router Todo</h1>
      <TodoForm session={session} />

      {todos.length === 0 ? (
        <p>You have 0 todos....</p>
      ) : (
        <TodoList todos={todos} />
      )}
    </main>
  );
};

export default Dashboard;
