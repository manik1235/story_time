class AxisController < ApplicationController
  before_action :set_axis

  # PATCH/PUT /axis/1
  # PATCH/PUT /axis/1.json
  def update
    respond_to do |format|
      if !@axis.update(axis_params)
        format.json { render json: @axis.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_axis
      @axis = Axis.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def axis_params
      params.require(:axis).permit(
        :name,
        :degrees,
        :x_offset,
        :y_offset,
        :hex_diameter,
        :map_width,
        :map_height,
        :dash_filled_length,
        :dash_blank_length,
        :color,
        :map_id,
      )
    end
end
