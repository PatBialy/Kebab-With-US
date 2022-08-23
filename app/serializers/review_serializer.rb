class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment
  has_many :user
  has_many :kebab



end
