class CommentsController < ApplicationController

  def create
    comment = Comment.new
    comment.name = params[:name]
    comment.dish_id = params[:dish_id]
    comment.save
    redirect_to "/dishes/#{comment.dish_id}"
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def update
    comment = Comment.find(params[:id])
    comment.name = params[:name]
    comment.save
    redirect_to "/dishes/#{comment.dish_id}"
  end

end
