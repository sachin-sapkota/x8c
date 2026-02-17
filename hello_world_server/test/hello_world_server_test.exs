defmodule HelloWorldServerTest do
  use ExUnit.Case
  doctest HelloWorldServer

  test "greets the world" do
    assert HelloWorldServer.hello() == :world
  end
end
