"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PriceRangeFilterProps {
  minPrice: number
  maxPrice: number
  onPriceChange: (min: number, max: number) => void
}

export default function PriceRangeFilter({ minPrice, maxPrice, onPriceChange }: PriceRangeFilterProps) {
  const [minValue, setMinValue] = useState(minPrice)
  const [maxValue, setMaxValue] = useState(maxPrice)

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setMinValue(value)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setMaxValue(value)
  }

  const handleApply = () => {
    onPriceChange(minValue, maxValue)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <label htmlFor="min-price" className="text-sm text-gray-500 mb-1 block">
            Min
          </label>
          <Input
            id="min-price"
            type="number"
            min={0}
            max={maxValue}
            value={minValue}
            onChange={handleMinChange}
            className="w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="max-price" className="text-sm text-gray-500 mb-1 block">
            Max
          </label>
          <Input
            id="max-price"
            type="number"
            min={minValue}
            max={1000}
            value={maxValue}
            onChange={handleMaxChange}
            className="w-full"
          />
        </div>
      </div>
      <Button onClick={handleApply} className="w-full bg-black text-white hover:bg-gray-800">
        Apply
      </Button>
    </div>
  )
}
