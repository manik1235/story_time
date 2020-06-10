class AddLinksToWelcome < ActiveRecord::Migration[6.0]
  def up
    resources = %w(
      items
      maps
      npcs
      users
    )

    resources.each do |resource|
      Welcome.new(link: resource, title: resource.titleize).save
    end
  end

  def down
    Welcome.destroy_all
  end
end
