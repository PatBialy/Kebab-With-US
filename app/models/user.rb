class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :kebabs, through: :reviews
    has_many :favorites

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
