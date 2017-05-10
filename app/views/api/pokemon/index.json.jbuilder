@pokemon.each do |pkm|
  json.set! pkm.id do
    json.extract! pkm, :id, :name
    json.image_url asset_path(pkm.image_url)
  end
end
