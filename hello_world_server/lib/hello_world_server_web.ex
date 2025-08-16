defmodule HelloWorldServerWeb do
  use Plug.Router

  plug :match
  plug :dispatch

  get "/" do
    ip = conn.remote_ip |> Tuple.to_list |> Enum.join(".")
    send_resp(conn, 200, "Hello World, from #{ip}")
  end

  match _ do
    send_resp(conn, 404, "Not Found")
  end
