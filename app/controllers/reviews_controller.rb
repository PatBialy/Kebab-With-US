class ReviewsController < ApplicationController

    # skip_before_action :authorize

    def index 
        review = Review.all
        render json: review, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def update 
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :accepted
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:user_id, :kebab_id, :rating, :comment)
    end
end
