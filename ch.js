let invalidTeamMember = [];
  let isInvalid = false;
  let teamLeadConflict = false;
  let duplicatesFound = false;
  let seenMembers = {};

  // Check team lead conflicts and duplicates
  teamMembers.forEach((member, index) => {
    // Check team lead conflict
    if (Lead === member.userId) {
      if (!invalidTeamMember.includes(index)) {
        invalidTeamMember.push(index);
      }
      teamLeadConflict = true;
      isInvalid = true;
    }

    // Check duplicates by comparing with other members
    if (seenMembers[member.userId] !== undefined) {
      invalidTeamMember.push(index);
      duplicatesFound = true;
      isInvalid = true;
    } else {
      seenMembers[member.userId] = index;
    }
  });
