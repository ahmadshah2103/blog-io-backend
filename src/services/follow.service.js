const { Follow } = require("../models");

const follow = async (userId, targetUserId) => {
  if (userId === targetUserId) {
    return { message: "You cannot follow yourself" };
  }

  const follow = await Follow.findOne({
    where: {
      follower_id: userId,
      followed_id: targetUserId,
    },
  });

  if (follow) {
    return false;
  } else {
    await Follow.create({
      follower_id: userId,
      followed_id: targetUserId,
    });
    return true;
  }
};

const unfollow = async (userId, targetUserId) => {
  const follow = await Follow.findOne({
    where: {
      follower_id: userId,
      followed_id: targetUserId,
    },
  });

  if (!follow) {
    return false;
  } else {
    await follow.destroy();
    return true;
  }
};

module.exports = {
  follow,
  unfollow,
};
