export interface Breed {
  id: number,
  bred_for:  string,
  breed_group:  string,
  description?: string,
  height: Metrics,
  life_span:  string,
  name: string,
  origin: string,
  reference_image_id: string,
  temperament: string,
  weight: Metrics,
}

export interface Metrics {
    imperial: string, 
    metric: string
}

export interface BreedDetail {
  id: string,
  breed_ids?: string,
  breeds: Breed[],
  categories?: [],
  height: number,
  mime_type?: string,
  url: string,
  width: number
}
