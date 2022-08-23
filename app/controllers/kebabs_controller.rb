class KebabsController < ApplicationController
    skip_before_action :authorize

    def index
        kebab = Kebab.all
        render json: kebab, status: :ok
    end

    def show
        kebab = Kebab.find(params[:id])
        render json: kebab, status: :ok, serializer:KebabsWithReviewsSerializer
    end
end
