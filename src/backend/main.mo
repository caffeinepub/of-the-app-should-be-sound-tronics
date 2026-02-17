import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";

actor {
  type ContactInquire = {
    name : Text;
    email : Text;
    message : Text;
  };

  let inquiries = Map.empty<Text, ContactInquire>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let inquiry : ContactInquire = {
      name;
      email;
      message;
    };
    inquiries.add(email, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquire] {
    inquiries.values().toArray();
  };
};
