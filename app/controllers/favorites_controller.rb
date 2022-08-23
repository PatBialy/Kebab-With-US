class FavoritesController < ApplicationController
    # skip_before_action :authorize

    def index 
        favorite = Favorite.all
        render json: favorite, status: :ok
    end

    def show
        favorite = Favorite.find(params[:id])
        render json: favorite, status: :ok
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created, serializer: FavoriteWithKebabsSerializer
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        head :no_content
    end

    private 

    def favorite_params
        params.permit(:user_id, :kebab_id)
    end
end
