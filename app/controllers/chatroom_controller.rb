class ChatroomController < ApplicationController
  def index
    @Messages.all
  end
end