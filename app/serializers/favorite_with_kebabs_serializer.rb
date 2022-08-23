class FavoriteWithKebabsSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :kebab_id
  belongs_to :user
  belongs_to :kebab
end
