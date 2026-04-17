import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos, error } = await supabase.from('todos').select()

  if (error) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Supabase Connection</h1>
        <p className="text-red-500">Error: {error.message}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Make sure you have a "todos" table in your Supabase project.
        </p>
      </div>
    )
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Supabase Todos</h1>
      {todos && todos.length > 0 ? (
        <ul className="list-disc pl-5 space-y-2">
          {todos.map((todo: any) => (
            <li key={todo.id}>{todo.name || todo.title}</li>
          ))}
        </ul>
      ) : (
        <p>No todos found. Add some to your "todos" table in Supabase.</p>
      )}
    </div>
  )
}
