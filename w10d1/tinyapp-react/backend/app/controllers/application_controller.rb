class ApplicationController < ActionController::API
  
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authorize
    return head 403 unless session[:user_id]
  end
  # helper_method :current_user


  # helper_method :authorize
end
