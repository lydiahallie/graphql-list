import Resolutions from './resolutions';
import Goals from '../goals/goals';

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      return Resolutions.find({userId}).fetch();
    }
  },

  Resolution: {
    goals: res => 
      Goals.find({
        resolutionId: res._id
      }).fetch()
  },
  
  Mutation: {
    createResolution(obj, { name }, { userId }) {
      const resolutionId = Resolutions.insert({
        name,
        userId,
      });
      return Resolutions.findOne(resolutionId);
    }
  }
}