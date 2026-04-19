/**
 * 사용자 리뷰 데이터 모델 (MongoDB)
 */

const mongoose = require('mongoose');

const userReviewSchema = new mongoose.Schema({
  // 사용자 정보
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  userName: String,

  // 맛집 정보
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
    index: true
  },
  restaurantName: String,
  dianpingId: String,

  // 리뷰 내용
  title: String,
  content: {
    type: String,
    required: true
  },

  // 평가
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  foodRating: {
    type: Number,
    min: 1,
    max: 5
  },
  serviceRating: {
    type: Number,
    min: 1,
    max: 5
  },
  ambianceRating: {
    type: Number,
    min: 1,
    max: 5
  },

  // 방문 정보
  visitDate: Date,
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'dessert']
  },

  // 사진
  images: [String],

  // 추천 음식
  recommendedDishes: [String],

  // 상태
  isPublic: {
    type: Boolean,
    default: true
  },
  isSpoiler: {
    type: Boolean,
    default: false
  },

  // 상호작용
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  },

  // 메타데이터
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// 인덱스 설정
userReviewSchema.index({ userId: 1, createdAt: -1 });
userReviewSchema.index({ restaurantId: 1, createdAt: -1 });
userReviewSchema.index({ rating: -1 });

module.exports = mongoose.model('UserReview', userReviewSchema);