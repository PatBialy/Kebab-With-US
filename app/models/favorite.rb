class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :kebab

  # validates :user_id, uniqueness: { scope: :kebab_id }
end
