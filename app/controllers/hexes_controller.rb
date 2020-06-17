class HexesController < ApplicationController
  before_action :set_hex, only: [:show, :edit, :update, :destroy]

  # GET /hexes
  # GET /hexes.json
  def index
    @hexes = Hex.all
  end

  # GET /hexes/1
  # GET /hexes/1.json
  def show
    respond_to do |format|
      format.html { render :show }
      format.json { render :show }
    end
  end

  # GET /hexes/new
  def new
    @hex = Hex.new
  end

  # GET /hexes/1/edit
  def edit
  end

  # POST /hexes
  # POST /hexes.json
  def create
    @hex = Hex.new(hex_params)

    respond_to do |format|
      if @hex.save
        format.html { redirect_to @hex, notice: 'Hex was successfully created.' }
        format.json { render :show, status: :created, location: @hex }
      else
        format.html { render :new }
        format.json { render json: @hex.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /hexes/1
  # PATCH/PUT /hexes/1.json
  def update
    respond_to do |format|
      if @hex.update(hex_params)
        format.html { redirect_to @hex, notice: 'Hex was successfully updated.' }
        format.json { render :show, status: :ok, location: @hex }
      else
        format.html { render :edit }
        format.json { render json: @hex.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /hexes/1
  # DELETE /hexes/1.json
  def destroy
    @hex.destroy
    respond_to do |format|
      format.html { redirect_to hexes_url, notice: 'Hex was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hex
      @hex = Hex.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def hex_params
      params.require(:hex).permit(:name, :x, :y, :z, :background)
    end
end
