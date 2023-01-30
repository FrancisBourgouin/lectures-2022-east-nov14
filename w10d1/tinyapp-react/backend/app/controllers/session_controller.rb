class SessionController < ApplicationController

  def create
    user = User.find_by_email(params[:email])


    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      head 403
    end
  end

  def destroy
    session[:user_id] = nil
    render json: {message: "logout complete"}
  end
end