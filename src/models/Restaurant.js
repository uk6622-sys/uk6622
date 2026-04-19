/**
 * 맛집 데이터 모델 (MongoDB)
 */

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  // 기본 정보
  name: {
    type: String,
    required: true,
    index: true
  },
  dianpingId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },

  // 위치 정보
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [경도, 위도]
      required: true,
      index: '2dsphere'
    }
  },
  address: String,
  city: {
    type: String,
    index: true
  },
  district: String,

  // 영업 정보
  category: {
    type: String,
    index: true
  },
  cuisine: [String],
  phoneNumber: String,
  openingHours: String,

  // 평가 정보
  rating: {
    type: Number,
    min: 0,
    max: 5,
    index: true
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  favoriteCount: {
    type: Number,
    default: 0
  },

  // 가격 정보
  priceRange: String,
  averagePrice: Number,

  // 메뉴 및 특징
  specialties: [String],
  highlights: [String],

  // 추가 정보
  imageUrl: String,
  website: String,
  tags: [String],

  // 메타데이터
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  lastSyncedAt: Date
});

// 인덱스 설정
restaurantSchema.index({ 'location.coordinates': '2dsphere' });
restaurantSchema.index({ name: 'text', address: 'text', category: 'text' });

// 미들웨어: updatedAt 자동 업데이트
restaurantSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Restaurant', restaurantSchema);