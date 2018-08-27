class User < ApplicationRecord
  belongs_to :role
  validates :user, presence: true
  validates :user, uniqueness: true
  validates :pass, presence: true
  before_create :hash_field

  def hash_field
    self.pass = Digest::MD5.hexdigest(self.pass)
  end
end
