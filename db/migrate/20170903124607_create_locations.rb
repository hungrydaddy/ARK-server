class CreateLocations < ActiveRecord::Migration[5.1]
    def change
        create_table :locations do |t|
            t.string :user_id, null: false
            t.float :lat, null: false
            t.float :lng, null: false

            t.timestamps
        end
    end
end
